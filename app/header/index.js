var yo = require('yo-yo');

var el = yo`<nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Rewrite</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="javascript:void(0)">A</a></li>
        <li><a href="javascript:void(0)">B</a></li>
        <li><a href="javascript:void(0)">C</a></li>
        <li><a href="javascript:void(0)">D</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="javascript:void(0)">A</a></li>
        <li><a href="javascript:void(0)">B</a></li>
        <li><a href="javascript:void(0)">C</a></li>
        <li><a href="javascript:void(0)">D</a></li>
      </ul>
    </div>
  </nav>`;
    
module.exports = function header(ctx, next) {
    document.getElementById('header-container').appendChild(el);
    next();    
}