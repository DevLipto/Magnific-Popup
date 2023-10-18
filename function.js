$(document).ready(function(){
    $(".openpopup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        }
    });
    $(".video-popup").magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'v=',
                    id: 'fOedIT6-PdY',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });
});