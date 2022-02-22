import GalleryItem from "./GalleryItem";

export default class GalleryList {
    constructor(arr){
        this.arr = arr;
        this.galleryList = document.querySelector('.gallerry__list');
        this.render();
    }

    render () {
        this.arr.forEach(({type, title, resource}) =>{
            this.galleryList.insertAdjacentHTML('beforeend', new GalleryItem(type, title, resource).render());
        })
    }
}