import { RectangleParseIndexes } from "../constants";
import { Point } from "../model/Point";
import { Rectangle } from "../model/Rectangle";

/**
 * Builds the Rectangle instance by parsing the rectangle data given in text fromat
 * @param line  
 */export function buildRectangle(line: string): Rectangle {

    line = line.replace(/[^-01-9.a-zA-Z ]/g, ''); // cleaning all the special charcter added by lineReader
    const rectanglePoints: string[] = line.split(' ');  // splitting the line data which is seperated by white space

    let rectangleId: string = rectanglePoints[RectangleParseIndexes.INDEX_RECTANGLE_ID];  // Intialising the first word of rectangle ID
    for (let i = RectangleParseIndexes.INDEX_RECTANGLE_ID + 1; i < rectanglePoints.length; i++) {

        rectangleId += ' ' + rectanglePoints[i]; // Concatinating remining words of rectangle ID if any
    }

    const rectangle = new Rectangle(rectangleId,
        new Point(+rectanglePoints[RectangleParseIndexes.INDEX_X1], +rectanglePoints[RectangleParseIndexes.INDEX_Y1]),
        new Point(+rectanglePoints[RectangleParseIndexes.INDEX_X2], +rectanglePoints[RectangleParseIndexes.INDEX_Y2]));

    return rectangle;
}