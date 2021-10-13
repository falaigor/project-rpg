import moment from "moment";
import "moment/locale/pt-br";

export const getPostDate = (data: string) =>
  moment(data).locale("pt-br").fromNow();
