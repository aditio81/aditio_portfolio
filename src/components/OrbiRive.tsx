"use client";

import { useCallback, useEffect, useState } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function OrbiRive() {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = useCallback(() => setIsLoaded(true), []);

  const { canvas, rive, RiveComponent } = useRive({
    src: "/orbi-hero.riv",
    autoplay: true,
    stateMachine: "State Machine 1",
    onLoad: handleLoad,
    shouldDisableRiveListeners: false,
    layout: new Layout({
      // Gunakan Fit.Contain agar seluruh artboard terlihat tanpa terpotong
      fit: Fit.Contain, 
      alignment: Alignment.Center,
    }),
  });

  useEffect(() => {
    if (!canvas || !rive) return;

    const hero = document.getElementById("hero-section");
    if (!hero) return;

    let pointerWasInHero = false;

    const toCanvasCoordinates = (clientX: number, clientY: number) => {
      const heroBounds = hero.getBoundingClientRect();
      const canvasBounds = canvas.getBoundingClientRect();
      const artboardBounds = rive.bounds;
      const artboardWidth = artboardBounds.maxX - artboardBounds.minX;
      const artboardHeight = artboardBounds.maxY - artboardBounds.minY;
      const scale = Math.min(
        canvasBounds.width / artboardWidth,
        canvasBounds.height / artboardHeight,
      );
      const contentWidth = artboardWidth * scale;
      const contentHeight = artboardHeight * scale;
      const x = (clientX - heroBounds.left) / heroBounds.width;
      const y = (clientY - heroBounds.top) / heroBounds.height;

      return {
        clientX:
          canvasBounds.left + (canvasBounds.width - contentWidth) / 2 + x * contentWidth,
        clientY:
          canvasBounds.top + (canvasBounds.height - contentHeight) / 2 + y * contentHeight,
      };
    };

    const forwardPointerMove = (event: MouseEvent) => {
      if (!event.isTrusted) return;

      const heroBounds = hero.getBoundingClientRect();
      const insideHero =
        event.clientX >= heroBounds.left &&
        event.clientX <= heroBounds.right &&
        event.clientY >= heroBounds.top &&
        event.clientY <= heroBounds.bottom;

      if (!insideHero) {
        if (pointerWasInHero) {
          const point = toCanvasCoordinates(event.clientX, event.clientY);
          canvas.dispatchEvent(
            new MouseEvent("mouseout", { bubbles: true, ...point }),
          );
          pointerWasInHero = false;
        }
        return;
      }

      if (event.target === canvas) event.stopPropagation();
      pointerWasInHero = true;
      const point = toCanvasCoordinates(event.clientX, event.clientY);

      canvas.dispatchEvent(
        new MouseEvent("mousemove", {
          bubbles: true,
          ...point,
        }),
      );
    };

    const suppressCanvasMouseOut = (event: MouseEvent) => {
      if (!event.isTrusted || event.target !== canvas) return;

      event.stopPropagation();
      if (event.relatedTarget && hero.contains(event.relatedTarget as Node)) return;
      if (!pointerWasInHero) return;

      const point = toCanvasCoordinates(event.clientX, event.clientY);
      canvas.dispatchEvent(
        new MouseEvent("mouseout", { bubbles: true, ...point }),
      );
      pointerWasInHero = false;
    };

    window.addEventListener("mousemove", forwardPointerMove, true);
    window.addEventListener("mouseout", suppressCanvasMouseOut, true);
    return () => {
      window.removeEventListener("mousemove", forwardPointerMove, true);
      window.removeEventListener("mouseout", suppressCanvasMouseOut, true);
    };
  }, [canvas, rive]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {RiveComponent && (
        <RiveComponent 
          className="w-full h-full" 
          // Memaksa canvas mengisi container secara eksplisit
          style={{
            width: "100%",
            height: "100%",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 100ms ease",
          }}
        />
      )}
    </div>
  );
}