import { Injectable } from '@nestjs/common';
import { ReverseReqDto } from './dto/reverse-req.dto';
import { ReverseResDto } from './dto/reverse-res.dto';

@Injectable()
export class AppService {
  getReversedString(textToBeReversed: string): string {
    const stringLetters = textToBeReversed.split('');
  
    let newString = '';
    for (let i = stringLetters.length - 1; i >= 0; i--) {
      newString += stringLetters[i]
    }

    return newString;
  }
}
