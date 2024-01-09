import QuestionInput from "./QuestionInput";
import QuestionParagraph from "./QuestionParagraph";
import QuestionTitle from "./QuestionTitle";
import QuestionTextArea from "./QuestionTextArea";
import QuestionRadio from "./QuestionRadio";
import QuestionCheckbox from './QuestionCheckbox'

export function getComponentByType(type: string, item: any) {
  const { fe_id, props } = item;

  switch (type) {
    case "questionTitle":
      return <QuestionTitle {...props} />;
    case "questionInput":
      return <QuestionInput fe_id={fe_id} props={props} />;
    case "questionParagraph":
      return <QuestionParagraph {...props} />;
    case "questionTextArea":
      return <QuestionTextArea fe_id={fe_id} props={props} />;
    case "questionRadio":
      return <QuestionRadio fe_id={fe_id} props={props} />;
      case "questionCheckbox":
        return <QuestionCheckbox fe_id={fe_id} props={props}/>
    default:
      return null;
  }
}
