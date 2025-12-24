import { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

const Model = ({ path }) => {
    const { scene } = useGLTF(path);
    return <primitive object={scene} />;
};

const ModelViewer = ({ modelPath }) => {
    return (
        <div className="model-viewer-container" style={{ width: '100%', height: '400px', background: '#1a1a1a', borderRadius: '10px', overflow: 'hidden' }}>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <Model path={modelPath} />
                    </Stage>
                </Suspense>
                <OrbitControls autoRotate />
            </Canvas>
        </div>
    );
};

export default ModelViewer;
