'use client';

import { useState, useEffect, useRef, Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SCENE_URL = 'https://prod.spline.design/b1pzvSd7idYj-1lC/scene.splinecode';

function canLoadSpline(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.innerWidth < 768) return false;
  if (navigator.hardwareConcurrency <= 2) return false;
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  return !!gl;
}

export default function SplineScene() {
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    setReady(canLoadSpline());
  }, []);

  useEffect(() => {
    if (!ready) return;
    timerRef.current = setTimeout(() => setFailed(true), 10_000);
    return () => clearTimeout(timerRef.current!);
  }, [ready]);

  function onLoad() {
    clearTimeout(timerRef.current);
    setLoaded(true);
  }

  if (!ready || failed) return null;

  return (
    <Suspense fallback={null}>
      <Spline
        scene={SCENE_URL}
        onLoad={onLoad}
        style={{
          width: '100%',
          height: '100%',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      />
    </Suspense>
  );
}
