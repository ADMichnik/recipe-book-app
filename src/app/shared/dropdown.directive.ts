import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    // when class.open is set to true it is added to element wich have appDropdown directive

    // @HostListener('click') toggeOpen(eventData: Event) {
    //     this.isOpen = !this.isOpen;
    // }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}

    // here we listen to clicks on entire document and if the target of click is our element then we toggle it, else we close it 
    
}