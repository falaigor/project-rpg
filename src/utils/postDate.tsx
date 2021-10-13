import moment from "moment";
import "moment/locale/pt-br";

export const postDate = (data: string) =>
  moment(data).locale("pt-br").fromNow();
