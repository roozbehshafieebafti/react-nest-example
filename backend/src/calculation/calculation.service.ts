import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculationService {
    sum(a, b) {
        if (a && b)
            return a+b;
        else
            return (a || b);
    }
}
