import Color from './color.enum';
/**
 * Valoración o calificación.
 */
declare enum Rate {
    Awful = -2,
    Bad = -1,
    Neutral = 0,
    Good = 1,
    Great = 2
}
declare namespace Rate {
    /**
     * Obtiene el color correspondiente de la valoración especificada.
     *
     * @param  rate
     */
    function color(rate: Rate): Color;
    /**
     * Obtiene el nombre del ícono correspondiente.
     *
     * @param  rate
     */
    function icon(rate: Rate): string;
}
export default Rate;
