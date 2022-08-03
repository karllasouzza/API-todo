//  this = Sempre irá se referir a class que ele esta dentro
import { v4 as uuidv4 } from "uuid";

export class Tasks_M {
  /**
   * @param {Number} outsideUserID
   * @param {String} outsideText
   * @param {"Pending" | "Completed" | "Canceled"} outsideStatus
   */
  constructor(outsideUserID, outsideText, outsideStatus) {
    this.id = uuidv4();
    this.userId = outsideUserID;
    this.text = outsideText;
    this.status = outsideStatus;
  }
}
