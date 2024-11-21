import * as THREE from "three";

class Drawer {
  constructor({camera,drawerSpeed}) {

    this.outerBoxHeight = 1.5;
    this.outerBoxWidth = 3.5;
    this.outerBoxDepth = 2.9;

    this.wallThickness = 0.1;
    this.drawerWidth = 2.8;
    this.drawerHeight = 0.8;
    this.drawerDepth = 2.8;

    // Load Textures
    this.textureLoader = new THREE.TextureLoader();
    this.tableTexture = this.textureLoader.load("/3d-drawer/table.jpg");
    this.tableTexture.colorSpace = THREE.SRGBColorSpace;

    this.drawerTexture = this.textureLoader.load("/3d-drawer/drawer.jpg");
    this.drawerTexture.colorSpace = THREE.SRGBColorSpace;

    this.outerBoxMaterial = new THREE.MeshBasicMaterial({
      map: this.tableTexture,
    });
    this.drawerMaterial = new THREE.MeshBasicMaterial({
      map: this.drawerTexture,
    });

    this.drawerBox = new THREE.Group();
    this.drawerInitialPostions = { x: 0, y: 0, z: 0.2 };
    this.distanceBetweenDrawer = 1;
    this.camera = camera;
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.drawerList = [];
    this.drawerSpeed = drawerSpeed || 3;

    this.hanldeClickEvent = this.hanldeClickEvent.bind(this);
    window.addEventListener('click', this.hanldeClickEvent);
}
  createSingleDrawer({ position, name }) {
    const drawer = new THREE.Group();
    drawer.name = name;

    const drawerLeftSideGeometry = new THREE.BoxGeometry(
      this.wallThickness,
      this.drawerHeight - 2 * this.wallThickness,
      this.drawerDepth - this.wallThickness
    );
    const drawerLeftSide = new THREE.Mesh(
      drawerLeftSideGeometry,
      this.drawerMaterial
    );
    drawerLeftSide.position.set(
      -(this.drawerWidth / 2 - this.wallThickness / 2),
      0,
      -this.wallThickness / 2
    );
    drawer.add(drawerLeftSide);

    // Right Side of Drawer
    const drawerRightSideGeometry = new THREE.BoxGeometry(
      this.wallThickness,
      this.drawerHeight - 2 * this.wallThickness,
      this.drawerDepth - this.wallThickness
    );
    const drawerRightSide = new THREE.Mesh(
      drawerRightSideGeometry,
      this.drawerMaterial
    );
    drawerRightSide.position.set(
      this.drawerWidth / 2 - this.wallThickness / 2,
      0,
      -this.wallThickness / 2
    );
    drawer.add(drawerRightSide);

    // Bottom of Drawer
    const drawerBottomGeometry = new THREE.BoxGeometry(
      this.drawerWidth,
      this.wallThickness,
      this.drawerDepth - this.wallThickness
    );
    const drawerBottom = new THREE.Mesh(
      drawerBottomGeometry,
      this.drawerMaterial
    );
    drawerBottom.position.set(
      0,
      -(this.drawerHeight / 2 - this.wallThickness / 2),
      -this.wallThickness / 2
    );
    drawer.add(drawerBottom);

    // Back of Drawer
    const drawerBackGeometry = new THREE.BoxGeometry(
      this.drawerWidth,
      this.drawerHeight - 2 * this.wallThickness,
      this.wallThickness
    );
    const drawerBack = new THREE.Mesh(drawerBackGeometry, this.drawerMaterial);
    drawerBack.position.set(
      0,
      0,
      -(this.drawerDepth / 2 - this.wallThickness / 2)
    );
    drawer.add(drawerBack);

    // Front of Drawer
    const drawerFrontGeometry = new THREE.BoxGeometry(
      this.drawerWidth,
      this.drawerHeight,
      this.wallThickness
    );
    const drawerFront = new THREE.Mesh(
      drawerFrontGeometry,
      this.drawerMaterial
    );
    drawerFront.position.set(
      0,
      0,
      this.drawerDepth / 2 - this.wallThickness / 2
    );
    drawer.add(drawerFront);

    // Handle of Drawer
    const handleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.4, 32);
    const handleMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
    const handle = new THREE.Mesh(handleGeometry, handleMaterial);
    handle.rotation.x = Math.PI / 2;
    handle.position.set(0, 0, this.wallThickness / 2 + 0.05);
    drawerFront.add(handle);


    drawer.position.set(position.x, position.y, position.z);
    drawer.isClosed = true;
    drawer.isDrawer =  true;
    drawer.drawerTargetPosition = this.drawerInitialPostions.z;
    return drawer;
  }

  createOuterBox({ name, size }) {
    const outerBoxGeometry = new THREE.BoxGeometry(
      size.width,
      size.height,
      size.depth
    );
    const outerBox = new THREE.Mesh(outerBoxGeometry, this.outerBoxMaterial);
    outerBox.name = name;
    return outerBox;
  }

  createDrawer({numberOfDrawers, name }) {
    const outerBox = this.createOuterBox({
      name,
      size: {
        width: this.outerBoxWidth,
        height: this.outerBoxHeight + (this.drawerHeight)*(numberOfDrawers > 3 ? numberOfDrawers*1.3 : numberOfDrawers) ,
        depth: this.outerBoxDepth,
      },
    });
    this.drawerBox.add(outerBox);
    for(let i=0,j=-1,k=1;i<numberOfDrawers;i++){ 
        let drawer = this.createSingleDrawer({
          position: {x:this.drawerInitialPostions.x,y:this.drawerInitialPostions.y + 
            ((i == 0 ? i : (i%2 == 0 ? j--:k++))*this.distanceBetweenDrawer),
            z:this.drawerInitialPostions.z},
          name: `drawer01${i}`,
        });
        this.drawerList.push(drawer);
        this.drawerBox.add(drawer);
    }

    this.drawerBox.position.x = 0;
    // Add to Scene
    return this.drawerBox;
  }

  hanldeClickEvent(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.drawerBox.children, true);


    if (intersects.length > 0) {
        let clickedObject = intersects[0].object;
        if (clickedObject.parent) { 
          clickedObject = clickedObject.parent;
        }
        if(clickedObject.isDrawer){
            if(clickedObject.isClosed){
                clickedObject.isClosed = false;
                clickedObject.drawerTargetPosition = this.drawerDepth;
            }else{
                clickedObject.isClosed = true;
                clickedObject.drawerTargetPosition = this.drawerInitialPostions.z;
            }
        }
      }
  }

  openCloseAnimation(){
    this.drawerList.map((drawer)=>{
        if(drawer.position.z !== drawer.drawerTargetPosition){
            const direction = (drawer.isClosed ? -1 : 1);
            const step = this.drawerSpeed * 0.01; // Adjust speed multiplier as needed
            drawer.position.z += direction * step;

            if (Math.abs(drawer.position.z - drawer.drawerTargetPosition) < step) {
                drawer.position.z = drawer.drawerTargetPosition;
              }
        } 
    });

 
  }
  
  destroy() {
    window.removeEventListener('click', this.hanldeClickEvent);
}
}

export default Drawer;
