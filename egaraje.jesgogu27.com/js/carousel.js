<script type="text/javascript">
$('.carousel').carousel({
     interval: 8000,
     pause:false,
     wrap:false,
});
</script>

<script type="text/javascript">
var nav = document.getElementById('nav');

window.onscroll = function () {

     if (window.pageYOffset > 100) {

          nav.style.position = "fixed";
          nav.style.top = 0;

     } else {
          // nav.style.position = "absolute";
          nav.style.position = 'relative'; //fixed
          nav.style.top = 100;
     }
}
</script>
