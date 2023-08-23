import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import LocomotiveScroll from 'locomotive-scroll';
import Screen from './Screen'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

function Hero() {

    // const gsapCanvas =()=>{
    //     gsap.registerPlugin(ScrollTrigger)

    // const canvas = document.querySelector("canvas");
    // const context = canvas.getContext("2d");

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    // window.addEventListener("resize", function () {
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    //   render();
    // });

    // const files = index => (
    //   `/newImages/${index.toString().padStart(4, '0')}.png`
    // )
    
    // const frameCount = 469;
    
    // const images = [];
    // const imageSeq = {
    //   frame: 1,
    // };
    
    // for (let i = 1; i <= frameCount; i++) {
    //   const img = new Image();
    //   img.src = files(i);
    //   images.push(img);
    // }
    
    // gsap.to(imageSeq, {
    //   frame: frameCount - 1,
    //   snap: "frame",
    //   ease: `none`,
    //   scrollTrigger: {
    //     scrub: 0.15,
    //     trigger: `canvas`,
    //     start: `top top`,
    //     end: `600% top`,
    //     scroller: `#main`,
    //   },
    //   onUpdate: render,
    // });
    
    // images[1].onload = render;
    
    // function render() {
    //   scaleImage(images[imageSeq.frame], context);
    // }
    
    // function scaleImage(img, ctx) {     // c.height = 715px & img.height = 1080px
    //   var canvas = ctx.canvas;          // c.width = 1536px & img.width = 1920px
    //   var hRatio = canvas.width / img.width;  // 0.8 -> c.width is 80% of img.width SO new img.width = 80% of old img.width  
    //   var vRatio = canvas.height / img.height;  // 0.66
    //   var ratio = Math.max(hRatio, vRatio);
    
    //   var newImgwidth = img.width * ratio;   // 80% of original image width
    //   var newImgheight = img.height * ratio; // 80% of original image height but needed 66% to completely fit into canvas
    
    //   var centerShift_x = (canvas.width - newImgwidth)/2;
    //   var centerShift_y = (canvas.height - newImgheight)/2
  
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   ctx.drawImage(
    //     img,
    //     0,
    //     0,
    //     img.width,
    //     img.height,
    //     centerShift_x,
    //     centerShift_y,
    //     img.width * ratio,
    //     img.height * ratio
    //   );
    
    // }

    // ScrollTrigger.create({

    //   trigger: "canvas",
    //   pin: true,
    //   // markers:true,
    //   scroller: `#main`,
    //   start: `top top`,
    //   end: `600% top`,
    // });
    
    // gsap.to("#page1",{
    //   scrollTrigger:{
    //     trigger:`#page1`,
    //     start:`top top`,
    //     end:`bottom top`,
    //     // markers: true,
    //     pin:true,
    //     scroller:`#main`
    //   }
    // })
    // gsap.to("#page2",{
    //   scrollTrigger:{
    //     trigger:`#page2`,
    //     start:`top top`,
    //     end:`bottom top`,
    //     // markers: true,
    //     pin:true,
    //     scroller:`#main`
    //   }
    // })
    // gsap.to("#page3",{
    //   scrollTrigger:{
    //     trigger:`#page3`,
    //     start:`top top`,
    //     end:`bottom top`,
    //     pin:true,
    //     scroller:`#main`
    //   }
    // })
    // }
    
    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    
    //     const locoScroll = new LocomotiveScroll({
    //       el: document.querySelector("#main"),
    //       smooth: true,
    //     });
    
    //     locoScroll.on("scroll", ScrollTrigger.update);
    
    //     ScrollTrigger.scrollerProxy("#main", {
    //       scrollTop(value) {
    //         return arguments.length
    //           ? locoScroll.scrollTo(value, 0, 0)
    //           : locoScroll.scroll.instance.scroll.y;
    //       },
    
    //       getBoundingClientRect() {
    //         return {
    //           top: 0,
    //           left: 0,
    //           width: window.innerWidth,
    //           height: window.innerHeight,
    //         };
    //       },
    
    //       pinType: document.querySelector("#main").style.transform
    //         ? "transform"
    //         : "fixed",
    //     });
    
    //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    //     ScrollTrigger.refresh();


    //     gsapCanvas();
    
    //     return () => {
    //       locoScroll.destroy();
    //     };
    //   }, []);

  return (
    <div id="main">
        <Screen/>
        <Page1/>
        <Page2/>
        <Page3/>
    </div>
  )
}

export default Hero