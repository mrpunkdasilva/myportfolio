declare module 'three/examples/jsm/loaders/GLTFLoader' {
    export class GLTFLoader {
        constructor();
        load(
            url: string,
            onLoad: (gltf: any) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
    }
}

declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, WebGLRenderer } from 'three';

    export class OrbitControls {
        constructor(camera: Camera, domElement: HTMLElement);
        enableDamping: boolean;
        dampingFactor: number;
        autoRotate: boolean;
        autoRotateSpeed: number;
        update(): void;
    }
}