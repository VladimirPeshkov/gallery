export default class GalleryItem {
    constructor(type, title, resource){
        this.type = type;
        this.title = title;
        this.resource = resource;
    }

    render(){
        switch (this.type) {
            case 'image':
                return `
                        <li class="gallery-item">
                            <h3 class="gallery-item__title">${this.title}</h3>
                            <img class="gallery-item__img" src="${this.resource}" width="250px">
                        </li>`
                break;  
            case 'audio':
                return `
                        <li class="gallery-item">
                            <h3 class="gallery-item__title">${this.title}</h3>
                            <audio class="gallery__item-audio" controls>
                                <source src="${this.resource}"></source>
                            </audio>
                        </li>`
                break;
            case 'video':
                return `
                        <li class="gallery-item">
                            <h3 class="gallery-item__title">${this.title}</h3>
                            <video class="gallery__item-video"controls>
                                <source src="${this.resource}"></source>
                            </video>
                        </li>`
                break;  
        }

    }
}