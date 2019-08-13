import Color from './color.enum';

/**
 * Valoración o calificación.
 */
enum Rate {
  Awful = -2,
  Bad = -1,
  Neutral = 0,
  Good = 1,
  Great = 2
}


namespace Rate {
  /**
   * Obtiene el color correspondiente de la valoración especificada.
   *
   * @param  rate
   */
  export function color(rate: Rate): Color {
    switch (rate) {
      case Rate.Awful:
        return Color.Danger;

      case Rate.Bad:
        return Color.Warning;

      case Rate.Neutral:
        return Color.Light;

      case Rate.Good:
        return Color.Primary;

      case Rate.Great:
        return Color.Success;

      default:
        return Color.None;
    }
  }

  /**
   * Obtiene el nombre del ícono correspondiente.
   *
   * @param  rate
   */
  export function icon(rate: Rate): string {
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
}


export default Rate;
