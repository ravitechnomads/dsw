nextParticle = new NextParticle({
            image: document.all.logo,
            width: window.innerWidth,
            height: window.innerHeight,
            maxWidth: window.innerWidth * 1,
            particleGap: 1,
            noise: 1
        })
        window.onresize = function () {
            if (window.innerWidth > 600) {
                nextParticle.width = window.innerWidth - 20;
                nextParticle.height = window.innerHeight - 20;
                nextParticle.start();
            }
        }
