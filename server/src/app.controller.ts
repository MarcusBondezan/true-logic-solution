import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ReverseReqDto } from './dto/reverse-req.dto';
import { ReverseResDto } from './dto/reverse-res.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getReversedString(@Body() reverseReqDto: ReverseReqDto): ReverseResDto {

    const reversedString = this.appService.getReversedString(reverseReqDto.textToBeReversed);
    const response = new ReverseResDto(reversedString);
    return response;
  }
}
