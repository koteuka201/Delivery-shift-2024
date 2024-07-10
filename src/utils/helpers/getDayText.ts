export function getDayText(days: number): string {

    if (days % 100 >= 11 && days % 100 <= 19) {
      return `${days} рабочих дней`
    }
  
    switch (days % 10) {
      case 1:
        return `${days} рабочий день`
      case 2:
      case 3:
      case 4:
        return `${days} рабочих дня`
      default:
        return `${days} рабочих дней`
    }
}