import { Body, Controller, Headers , Post, Req, Res,Get, Redirect } from '@nestjs/common';
import { Request, Response } from 'express';
import '../calculation/calculation.service';
import { CalculationService } from '../calculation/calculation.service';

interface Bodiii{
    a : number;
    b: number
}

@Controller('math')
export class MathController {
    constructor(private MyService:CalculationService){};

    @Post('sum')
    sunNumbers(@Body() body:Bodiii, @Headers() head,  @Res() res:Response){
        const result = this.MyService.sum(body.a, body.b);
        res.status(200).json({result});
    }


    @Get('re')
    @Redirect('hello', 302)
    redirection(){

    }

    @Get('hello')
    hello( @Res() res:Response){
        res.send('hello');
    }
}
