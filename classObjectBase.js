class objectBase {
  obj;
  scene;
  constructor(url, scene, scale) {
    this.scene = scene;
    //Create cube as a place holder
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.obj = new THREE.Mesh(geometry, material);

    // Load from url
    const loader = new THREE.GLTFLoader();
    loader.load(
      url,
      res => {
        var x = this.obj.position.x;
        var y = this.obj.position.y;
        var z = this.obj.position.z;
        scene.remove(this.obj);
        res.scene.scale.set(scale, scale, scale);
        this.obj = res.scene;
        this.obj.position.set(x, y, z);
        scene.add(this.obj);
      },
      undefined,
      function(error) {
        console.error(error);
        alser(1);
      }
    );
    scene.add(this.obj);
  }
  moveTo(x, y, z) {
    this.obj.position.set(x, y, z);
  }
  isJitter = 0;
  frameMove() {}
}
