

  
imageSetArguments: function(variant) {
  var variant = variant ? variant : (this.variants ? this.variants.currentVariant : null);
  if (!variant) return;  

  // var setValue = this.settings.currentImageSet = this.getImageSetName(variant[this.settings.imageSetIndex]); // setValue = black
  if (this.settings.imageSetIndex !== null) {
    var setValue = this.settings.currentImageSet = this.getImageSetName(variant[this.settings.imageSetIndex]);
    var set = this.settings.imageSetName + '_' + setValue; 
  } else if (this.settings.imageSetIndex1 != null || this.settings.imageSetIndex2 != null ) {
    if (this.settings.imageSetIndex1 != null) {
      var setValue1 = this.settings.currentImageSet1 = this.getImageSetName(variant[this.settings.imageSetIndex1]);   // black
      var set1 = this.settings.imageSetName1 + '_' + setValue1;  // null_black
    } 
    if (this.settings.imageSetIndex2 != null) {
      var setValue2 = this.settings.currentImageSet2 = this.getImageSetName(variant[this.settings.imageSetIndex2]);
      var set2 = this.settings.imageSetName2 + '_' + setValue2; 
    }
  }

    // Always start on index 0
    this.settings.currentSlideIndex = 0;

    // Return object that adds cellSelector to mainSliderArgs
    // cellSelector = '[data-group="color_black"]'   set = color_black,    initialIndex = 0
    return {
      cellSelector: '[data-group="'+set+'"]',         // '[data-group="color_black"]'   because set is color_black
      imageSet: set,                                  //color_black
      initialIndex: this.settings.currentSlideIndex   // 0
    }
  },



  // Show/hide thumbnails based on current image set
  updateImageSetThumbs: function(set) {
    this.cache.thumbSlider.querySelectorAll('.product__thumb-item').forEach(thumb => {
      thumb.classList.toggle(classes.hidden, thumb.dataset.group !== set);                // set = color_white
    });
  },



  function Product(container) {.................
    this.selectors = {
      media: '[data-product-media-type-model]',
      closeMedia: '.product-single__close-media',
      photoThumbs: '[data-product-thumb]',
      thumbSlider: '[data-product-thumbs]',
      thumbScroller: '.product__thumbs--scroller',
      mainSlider: '[data-product-photos]',
      imageContainer: '[data-product-images]',
      productImageMain: '[data-product-image-main]',

      var dataSetEl = this.cache.mainSlider.querySelector('[data-set-name]');  // pulls <div> element from media.liquid line 69, whicih is whole file
      if (dataSetEl) {
        this.settings.imageSetName = dataSetEl.dataset.setName;   //color  OR  color*size





          // image set names variant change listeners

// ....(variant)[imageSetName]
// ....(variant[this.settings.imageSetIndex])


// var newImageSetIndex = [data-set-name]  '[data-set-name="'+set+'"]'

//passes through this once. not ajax

      var imageSetNameCheck = this.settings.imageSetName.includes("*");  // true or false
      if (imageSetNameCheck) {
        var imageSetNameTemp = this.settings.imageSetName.split("*");
        var imageSetName1 = imageSetNameTemp[0];    // color
        var imageSetName2 = imageSetNameTemp[1];    // size
      }


      // if (imageSetNameCheck != true) {
        if (this.settings.imageSetName ) {
          var variantWrapper = this.container.querySelector('.variant-input-wrap[data-handle="'+this.settings.imageSetName+'"]');  //comes up null if using both options, color*size
          if (variantWrapper) {
            this.settings.imageSetIndex = variantWrapper.dataset.index;  // option1
            this.container.on('variantChange' + this.settings.namespace, this.updateImageSet.bind(this))
          } else {
            this.settings.imageSetName = null;
          }
        } 
      // } else 
      if (this.settings.imageSetName1 || this.settings.imageSetName2) {
        var variantWrapper1 = this.container.querySelector('.variant-input-wrap[data-handle="'+this.settings.imageSetName1+'"]');
        if (variantWrapper1) {
          this.settings.imageSetIndex1 = variantWrapper1.dataset.index;  // definately option1
          // this.settings.imageSetIndex1 = 'option1'
          this.container.on('variantChange' + this.settings.namespace, this.updateImageSet.bind(this))  // use combined imageSet option1*option2
        } 
        var variantWrapper2 = this.container.querySelector('.variant-input-wrap[data-handle="'+this.settings.imageSetName2+'"]');
        if (variantWrapper2) {
          this.settings.imageSetIndex2 = variantWrapper2.dataset.index;  // definately option2
          // this.settings.imageSetIndex2 = 'option2'
          this.container.on('variantChange' + this.settings.namespace, this.updateImageSet.bind(this))  // use combined imageSet option1*option2
        } else {
          this.settings.imageSetName = null;
        }
      }
    },


    // Calls 
    updateImageSet: function(evt) {
        // If called directly, use current variant
        var variant = evt ? evt.detail.variant : (this.variants ? this.variants.currentVariant : null);
        if (!variant) {
          return;
        }
  
        //  ***********  GRAB VARIANT ANOTHER WAY **********
        // var setValue = this.getImageSetName(variant[this.settings.imageSetIndex]); // setValue1 = , imageSetIndex = 

        if (this.settings.imageSetIndex !== null) {
          var setValue = this.getImageSetName(variant[this.settings.imageSetIndex]); // setValue1 = , imageSetIndex = 
        } 
        if (this.settings.imageSetIndex1 !== null) {
          var setValue1 = this.getImageSetName(variant[this.settings.imageSetIndex1]); // setValue1 = , imageSetIndex = 
        } 
        if (this.settings.imageSetIndex2 !== null) {
          var setValue2 = this.getImageSetName(variant[this.settings.imageSetIndex2]); // setValue2 = , imageSetIndex = 
        }



        // Already on the current image group
        if (this.settings.currentImageSet === setValue) {
          return;
        }
  
        this.initProductSlider(variant);
    },

      // Show/hide thumbnails based on current image set
      updateImageSetThumbs: function(set) {                 // set = black
        this.cache.thumbSlider.querySelectorAll('.product__thumb-item').forEach(thumb => {
          thumb.classList.toggle(classes.hidden, thumb.dataset.group !== set);     // thumb.dataset.group = color_black
        });
      },
  
      getImageSetName: function(string) {   // string = Black  (uppercase)
        return string.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '');  // returns black (lowercase)
      },



      updateSku: function(evt) {
        var variant = evt.detail.variant;
        var newSku = '';
  
        if (variant) {
          if (variant.sku) {
            newSku = variant.sku;
          }
  
          this.container.querySelector(this.selectors.sku).textContent = newSku;
        }
      },



      getThumbIndex: function(target) {
        return target.dataset.index;
      },
  
      updateVariantImage: function(evt) {
        var variant = evt.detail.variant;
        var sizedImgUrl = theme.Images.getSizedImageUrl(variant.featured_media.preview_image.src, this.settings.imageSize);
  
        var newImage = this.container.querySelector('.product__thumb[data-id="' + variant.featured_media.id + '"]');
        var imageIndex = this.getThumbIndex(newImage);
  
        // If there is no index, slider is not initalized
        if (typeof imageIndex === 'undefined') {
          return;
        }
  
        // Go to that variant image's slide
        if (this.flickity) {
          this.flickity.goToSlide(imageIndex);
        }
      },
  
      initProductSlider: function(variant) {

console.log('a) initProductSlider()');

        // Stop if only a single image, but add active class to first slide
        if (this.cache.mainSlider.querySelectorAll(selectors.slide).length <= 1) {
          var slide = this.cache.mainSlider.querySelector(selectors.slide);   // slide is <div> element from media.liquid  div.product-main-slide.secondary-slide
          if (slide) {
            slide.classList.add('is-selected');
          }
console.log('b) initProductSlider()'); //shouldn't hit since multiple images

          return;
        }
  
        // Destroy slider in preparation of new initialization
        if (this.flickity && typeof this.flickity.destroy === 'function') {
          this.flickity.destroy();
console.log('c) initProductSlider()');

        }
  
        // If variant argument exists, slideshow is reinitializing because of the
        // image set feature enabled and switching to a new group.
        // currentSlideIndex
        if (!variant) {
          var activeSlide = this.cache.mainSlider.querySelector(selectors.startingSlide);
          this.settings.currentSlideIndex = this._slideIndex(activeSlide);
console.log('d) initProductSlider()');

        }
  
        var mainSliderArgs = {
          adaptiveHeight: true,
          avoidReflow: true,
          initialIndex: this.settings.currentSlideIndex,    // 0
          childNav: this.cache.thumbSlider,
          childNavScroller: this.cache.thumbScroller,
          childVertical: this.cache.thumbSlider.dataset.position === 'beside',
          pageDots: true, // mobile only with CSS
          wrapAround: true,
          callbacks: {
            onInit: this.onSliderInit.bind(this),    // name: "bound onSliderInit", length: 1
            onChange: this.onSlideChange.bind(this)  // name: "bound onSlideChange", length: 1
          }               // 'this' = the product with all variants. doesn't fail when 1 & 2 color*size
        };


  
        // Override default settings if image set feature enabled
        if (this.settings.imageSetName) {
          var imageSetArgs = this.imageSetArguments(variant);
          mainSliderArgs = Object.assign({}, mainSliderArgs, imageSetArgs);
          this.updateImageSetThumbs(mainSliderArgs.imageSet);     // imageSet = set = color_white
        }
  
        this.flickity = new theme.Slideshow(this.cache.mainSlider, mainSliderArgs);
      },
  
      onSliderInit: function(slide) {
        // If slider is initialized with image set feature active,
        // initialize any videos/media when they are first slide

console.log('2 slide = ' + slide);  // **NULL**  when 1 & 2
console.log('2 this.settings.imageSetName = ' + this.settings.imageSetName);  // color*size

        if (this.settings.imageSetName) {
          this.prepMediaOnSlide(slide);
        }
      },
  
      onSlideChange: function(index) {
        if (!this.flickity) return;
  
        var prevSlide = this.cache.mainSlider.querySelector('.product-main-slide[data-index="'+this.settings.currentSlideIndex+'"]');
  
        // If imageSetName exists, use a more specific selector
        var nextSlide = this.settings.imageSetName ?
                        this.cache.mainSlider.querySelectorAll('.flickity-slider .product-main-slide')[index] :
                        this.cache.mainSlider.querySelector('.product-main-slide[data-index="'+index+'"]');
  
        prevSlide.setAttribute('tabindex', '-1');
        nextSlide.setAttribute('tabindex', 0);
  
        // Pause any existing slide video/media
        this.stopMediaOnSlide(prevSlide);
  
        // Prep next slide video/media
        this.prepMediaOnSlide(nextSlide);
  
        // Update current slider index
        this.settings.currentSlideIndex = index;
      },
