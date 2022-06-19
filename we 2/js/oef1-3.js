'use strict'

let color = {
    nR: 'Rood',
    nG: 'Groen',
    nB: 'Blauw',

    showColor: function() {
        alert(`rgb (${this.nR}, ${this.nG}, ${this.nB})`);
    },

    setColor: function() {
        let r = prompt('Red value:');
        let g = prompt('Green value:');
        let b = prompt('Blue value');
        if(r <= 255 && r >= 0 && g <= 255 && g >= 0 && b <= 255 && b >= 0){
            alert('Success');
            this.nR = r;
            this.nG = g;
            this.nB = b;
        }
        else{
            alert('Foute waarde');
        }
        
    }
}

color.setColor();
color.showColor();


