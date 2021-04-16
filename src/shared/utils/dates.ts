import { addDays, parseISO, subDays, format } from 'date-fns';

export function parseDate(date: string) {
  return parseISO(date);
}

export function addDaysCalc(date: Date, amount: number) {
  return addDays(date, amount);
}

export function subDaysCalc(date: Date, amount: number) {
  return subDays(date, amount);
}

export function formatDate(date: Date, value: string) {
  return format(date, value);
}
