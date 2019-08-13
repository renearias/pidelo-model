"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_enum_1 = require("./color.enum");
/**
 * Valoración o calificación.
 */
var Rate;
(function (Rate) {
    Rate[Rate["Awful"] = -2] = "Awful";
    Rate[Rate["Bad"] = -1] = "Bad";
    Rate[Rate["Neutral"] = 0] = "Neutral";
    Rate[Rate["Good"] = 1] = "Good";
    Rate[Rate["Great"] = 2] = "Great";
})(Rate || (Rate = {}));
(function (Rate) {
    /**
     * Obtiene el color correspondiente de la valoración especificada.
     *
     * @param  rate
     */
    function color(rate) {
        switch (rate) {
            case Rate.Awful:
                return color_enum_1.default.Danger;
            case Rate.Bad:
                return color_enum_1.default.Warning;
            case Rate.Neutral:
                return color_enum_1.default.Light;
            case Rate.Good:
                return color_enum_1.default.Primary;
            case Rate.Great:
                return color_enum_1.default.Success;
            default:
                return color_enum_1.default.None;
        }
    }
    Rate.color = color;
    /**
     * Obtiene el nombre del ícono correspondiente.
     *
     * @param  rate
     */
    function icon(rate) {
        // TODO: Diferenciar más los íconos
        switch (rate) {
            case Rate.Awful:
                return 'sad';
            case Rate.Bad:
                return 'sad';
            case Rate.Neutral:
                return 'happy';
            case Rate.Good:
                return 'happy';
            case Rate.Great:
                return 'happy';
            default:
                return 'help-circle-outline';
        }
    }
    Rate.icon = icon;
})(Rate || (Rate = {}));
exports.default = Rate;
