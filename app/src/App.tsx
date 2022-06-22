import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ReverseResDto {
  reversedText: string;
}

export function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [reversedString, setReversedString] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data: any) => {
      try {
        setIsLoading(true);
        const response = await axios.post<ReverseResDto>('http://localhost:8080/', {
          textToBeReversed: data.textToBeReversed
			  });
        console.log(response);
        setReversedString(response.data.reversedText);

      } catch(error) {
        console.error(error);
      } 

      setIsLoading(false);
    }

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("textToBeReversed")} />
          <input type="submit" />
        </form>
        { reversedString && (<span>{reversedString}</span>)}
        
      </>


    )
}
