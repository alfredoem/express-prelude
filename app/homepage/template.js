var yo = require('yo-yo');

module.exports = function (data) {
    return yo`<section>
                <div class="page-content game-box-content">
                ${data.map(function(row){
                    return  yo`<div class="content-game waves-effect        waves-light">
                    <div class="game-picture">
                            <div class="image-game" style="display: block; background-image: url('images/slot-games/${row.gameId}.jpg');"></div>
                            <div class="tittle-game">
                                ${row.name}
                            </div>
                    </div>
                    </div>`})}
                </div>
            </section>`;
}