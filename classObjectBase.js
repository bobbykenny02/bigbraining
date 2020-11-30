class objectBase {
    obj;
    scene;
    constructor(url,scene,scale) {
        this.scene=scene;
        //Create cube as a place holder
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.obj = new THREE.Mesh(geometry, material);
        
        // Load from url 
        const loader = new THREE.GLTFLoader();
        loader.load(
            "stool.glb",
            (res) =>  {
                scene.remove(this.obj);
                res.scene.scale.set(scale, scale, scale);    
                this.obj = res.scene;  
                scene.add(this.obj);         
            }, undefined, function (error) {
                console.error(error);
            }
        );        
        scene.add(this.obj)
    }    
    frameMove() {
        this.obj.rotation.x += 0.01;
        this.obj.rotation.y += 0.01;
        this.obj.position.x += directionX / 100;
        this.obj.position.y += directionY / 100;
        if (this.obj.position.x > 8) directionX = -1;
        if (this.obj.position.x < -8) directionX = 1;
        if (this.obj.position.y > 3) directionY = -1;
        if (this.obj.position.y < -3) directionY = 1;
    }    
}