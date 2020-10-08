import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "maj"
})
export class MajPipe implements PipeTransform {
  transform(value: string, all?: string): string {
    return all == "all"
      ? value.toUpperCase()
      : value
          .charAt(0)
          .toUpperCase()
          .concat(value.substring(1));
  }
}
