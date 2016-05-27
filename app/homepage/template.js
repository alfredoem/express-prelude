var yo = require('yo-yo');

module.exports = function (data) {
    return yo`<section>
                <div class="page-content game-box-content">
                ${data.map(function(row){
                    return  yo`<div class="content-game waves-effect        waves-light">
                    <div class="game-picture">
                            <img class="image-game" src="images/slot-games/${row.gameId}.jpg">
                            <div class="tittle-game">
                                ${row.name}
                            </div>
                    </div>
                    </div>`})}
                </div>
            </section>`;
}