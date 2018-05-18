import { AbstractControl, ValidationErrors } from "@angular/forms";


export class customValidators {

    // Cannot Contain Space
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0){
            return { cannotContainSpace: true };
        }
        else{
            return null;
        }
    };

    // Should Be Unique
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'azrinamin'){
                    resolve({ shouldBeUnique: true });
                }
                else{
                    resolve(null);
                }
            }, 2000);  
        });            
    };
}