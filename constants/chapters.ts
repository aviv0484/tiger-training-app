
import { Chapter, QuestionType } from '../types';

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'פרק 1: עיקר השייכות - בניית תחושת שייכות בקבוצה',
    sections: [
      {
        title: 'בדיקת הבנה',
        questions: [
          { id: '1-1-1', text: 'מהי תחושת שייכות וכיצד היא תורמת להתפתחות הילד בקבוצה?', type: QuestionType.OpenEnded },
          { id: '1-1-2', text: 'מהם הסימנים לזיהוי ילד שלא חש שייך בקבוצה?', type: QuestionType.OpenEnded },
          { id: '1-1-3', text: 'כיצד נוכל לדעת אם בנינו תחושת שייכות מוצקה אצל המשתתפים?', type: QuestionType.MultipleChoice, options: [{label: 'לפי מספר החברים שיש להם', value: 'friends'}, {label: 'לפי רמת הפתיחות והשיתוף', value: 'openness'}, {label: 'לפי הישגים בתחרויות', value: 'achievements'}] },
        ],
      },
      {
        title: 'יישום עצמי',
        questions: [
          { id: '1-2-1', text: 'אילו צעדים נקטת כמאמן כדי לעודד תחושת שייכות אצל משתתפים חדשים?', type: QuestionType.OpenEnded },
          { id: '1-2-2', text: 'כיצד אתה מגיב כשהילד נשאר בשוליים?', type: QuestionType.OpenEnded },
          { id: '1-2-3', text: 'האם הרגשת שקבוצה מסוימת שפעלת בה הייתה בעלת שייכות גבוהה? מה תרם לכך?', type: QuestionType.OpenEnded },
        ],
      },
      {
        title: 'רפלקציה אישית',
        questions: [
          { id: '1-3-1', text: 'שתף במקרה שהצלחת לחבר ילד לקבוצה, למרות שחש תחושת זרות. מה עשית? אילו ערכים הובילו אותך?', type: QuestionType.Reflection },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'פרק 2: עיקרון המסוגלות - חיזוק ביטחון עצמי דרך הצלחות',
    sections: [
      {
        title: 'בדיקת הבנה',
        questions: [
          { id: '2-1-1', text: 'מהו ההבדל בין חיזוק חיובי מדויק למחמאה ריקה?', type: QuestionType.OpenEnded },
          { id: '2-1-2', text: 'כיצד "משימות הצלחה קטנות" בונות ביטחון עצמי?', type: QuestionType.OpenEnded },
          { id: '2-1-3', text: 'האם ביטחון עצמי נבנה בעיקר דרך הצלחה או גם דרך התמודדות עם כישלון?', type: QuestionType.MultipleChoice, options: [{label: 'רק הצלחה', value: 'success'}, {label: 'בעיקר התמודדות עם כישלון', value: 'failure'}, {label: 'שניהם תורמים במידה שווה', value: 'both'}] },
        ],
      },
      {
        title: 'יישום עצמי',
        questions: [
          { id: '2-2-1', text: 'תאר מקרה בו זיהית הזדמנות לחזק ביטחון של חניך והצלחת.', type: QuestionType.OpenEnded },
          { id: '2-2-2', text: 'באילו דרכים אתה יוצר סביבה המאפשרת לחניכים לחוות הצלחות?', type: QuestionType.OpenEnded },
          { id: '2-2-3', text: 'כיצד שפת הגוף שלך כמאמן משפיעה על תחושת המסוגלות של החניכים?', type: QuestionType.OpenEnded },
        ],
      },
      {
        title: 'רפלקציה אישית',
        questions: [
          { id: '2-3-1', text: 'היזכר ברגע שבו הרגשת חוסר ביטחון כמאמן. כיצד התמודדת ומה למדת מכך על עצמך ועל חניכיך?', type: QuestionType.Reflection },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'פרק 3: תיווך חברתי בתוך הקבוצה',
    sections: [
        { title: 'בדיקת הבנה', questions: [{ id: '3-1-1', text: 'מהו "תיווך חברתי" בהקשר של אימון קבוצתי?', type: QuestionType.OpenEnded }, { id: '3-1-2', text: 'מדוע חשוב לא להתעלם מדפוסים של דחייה או כוח בקבוצה?', type: QuestionType.OpenEnded }, { id: '3-1-3', text: 'האם תפקיד המדריך הוא לפתור קונפליקטים או לתווך אותם?', type: QuestionType.MultipleChoice, options: [{label: 'לפתור', value: 'solve'}, {label: 'לתווך', value: 'mediate'}, {label: 'להתעלם', value: 'ignore'}] }] },
        { title: 'יישום עצמי', questions: [{ id: '3-2-1', text: 'תן דוגמה לתרגיל או משחק שנועד לעודד קשרים חברתיים בקבוצה.', type: QuestionType.OpenEnded }, { id: '3-2-2', text: 'כיצד אתה מתערב כאשר אתה מזהה ילד מבודד בקבוצה?', type: QuestionType.OpenEnded }, { id: '3-2-3', text: 'תאר מצב בו תיווכת בהצלחה בין שני חניכים.', type: QuestionType.OpenEnded }] },
        { title: 'רפלקציה אישית', questions: [{ id: '3-3-1', text: 'חשוב על קונפליקט חברתי שניהלת פחות טוב. מה היית עושה אחרת היום, לאור מה שלמדת?', type: QuestionType.Reflection }] }
    ]
  },
  {
    id: 4,
    title: 'פרק 4: שיח רגשי מותאם',
    sections: [
        { title: 'בדיקת הבנה', questions: [{ id: '4-1-1', text: 'מהם המאפיינים של שיח רגשי המותאם לגילאי בית ספר יסודי?', type: QuestionType.OpenEnded }, { id: '4-1-2', text: 'מדוע חשוב להשתמש בדימויים מעולם הילד (טבע, גיבורי על) בשיח רגשי?', type: QuestionType.OpenEnded }, { id: '4-1-3', text: 'האם נכון לשאול ילד "מה הרגשת?" באופן ישיר?', type: QuestionType.MultipleChoice, options: [{label: 'תמיד', value: 'always'}, {label: 'לפעמים', value: 'sometimes'}, {label: 'עדיף להימנע', value: 'avoid'}] }] },
        { title: 'יישום עצמי', questions: [{ id: '4-2-1', text: 'כיצד אתה "פותח" שיחה רגשית אחרי אירוע טעון באימון?', type: QuestionType.OpenEnded }, { id: '4-2-2', text: 'תן דוגמה לדימוי שהשתמשת בו כדי לעזור לילד להבין רגש.', type: QuestionType.OpenEnded }, { id: '4-2-3', text: 'איך אתה מבדיל בין תיווך רגשי ל"חפירה" פסיכולוגית?', type: QuestionType.OpenEnded }] },
        { title: 'רפלקציה אישית', questions: [{ id: '4-3-1', text: 'שתף ברגע בו הצלחת לנהל שיח רגשי משמעותי עם חניך, ומה למדת מכך על היכולות שלך ועל צרכי החניכים.', type: QuestionType.Reflection }] }
    ]
  },
  {
    id: 5,
    title: 'פרק 5: התמודדות עם כשלון, תסכול ודחף',
    sections: [
        { title: 'בדיקת הבנה', questions: [{ id: '5-1-1', text: 'מהי "נורמליזציה של קושי" וכיצד היא מסייעת לחניכים?', type: QuestionType.OpenEnded }, { id: '5-1-2', text: 'מה הסכנה בתגובה "תתגבר על זה" לכשלון של חניך?', type: QuestionType.OpenEnded }, { id: '5-1-3', text: 'כיצד שימוש בדימויים מעולם הלחימה יכול לסייע בריסון עצמי?', type: QuestionType.OpenEnded }] },
        { title: 'יישום עצמי', questions: [{ id: '5-2-1', text: 'תאר כיצד הפכת כשלון של חניך באימון להזדמנות למידה.', type: QuestionType.OpenEnded }, { id: '5-2-2', text: 'אילו טכניקות ריסון עצמי מהעולם שלך אתה יכול ללמד חניכים?', type: QuestionType.OpenEnded }, { id: '5-2-3', text: 'כיצד אתה מזהה "בריחה רגשית" (הסתתרות, הצקה) אצל חניך מתוסכל?', type: QuestionType.OpenEnded }] },
        { title: 'רפלקציה אישית', questions: [{ id: '5-3-1', text: 'היזכר במקרה בו תסכול של חניך "הדביק" אותך. כיצד פעלת, ומה למדת על היכולת שלך לווסת את רגשותיך כמדריך?', type: QuestionType.Reflection }] }
    ]
  },
  {
    id: 6,
    title: 'פרק 6: עידוד התמדה ויצירת חוויות הצלחה מצטברות',
    sections: [
        { title: 'בדיקת הבנה', questions: [{ id: '6-1-1', text: 'מהו ההבדל בין "התקדמות" לבין "הישג" עבור ילד?', type: QuestionType.OpenEnded }, { id: '6-1-2', text: 'כיצד יוצרים "אווירת התקדמות" שאינה מבוססת על תחרות והשוואה?', type: QuestionType.OpenEnded }, { id: '6-1-3', text: 'האם חשוב יותר לעקוב אחר מטרות פיזיות או רגשיות של כל חניך?', type: QuestionType.MultipleChoice, options: [{label: 'פיזיות', value: 'physical'}, {label: 'רגשיות', value: 'emotional'}, {label: 'שתיהן חשובות', value: 'both'}] }] },
        { title: 'יישום עצמי', questions: [{ id: '6-2-1', text: 'באילו כלים ויזואליים (גרפים, מדליות, לוח הצלחות) אתה משתמש כדי להמחיש התקדמות?', type: QuestionType.OpenEnded }, { id: '6-2-2', text: 'כיצד אתה משקף לחניך את הדרך שעבר כדי לעודד התמדה?', type: QuestionType.OpenEnded }, { id: '6-2-3', text: 'תאר טקס מעבר (כמו קבלת חגורה) וכיצד הוא תורם לתחושת ההתקדמות הרגשית.', type: QuestionType.OpenEnded }] },
        { title: 'רפלקציה אישית', questions: [{ id: '6-3-1', text: 'חשוב על חניך שהתקשה להתמיד ופרש. מה יכולת לעשות אחרת כדי לחזק את המוטיבציה שלו להישאר?', type: QuestionType.Reflection }] }
    ]
  },
  {
    id: 7,
    title: 'פרק 7: פיתוח מודעות עצמית אצל הילד',
    sections: [
        { title: 'בדיקת הבנה', questions: [{ id: '7-1-1', text: 'מהי "מודעות עצמית" בהקשר של ילדים, ומה היא לא?', type: QuestionType.OpenEnded }, { id: '7-1-2', text: 'כיצד תרגילי "מראה" עוזרים לילד להבין איך הוא משפיע על אחרים?', type: QuestionType.OpenEnded }, { id: '7-1-3', text: 'מה ההבדל בין "רציתי... אבל בחרתי..." וכיצד הוא מחזק מודעות ובחירה?', type: QuestionType.OpenEnded }] },
        { title: 'יישום עצמי', questions: [{ id: '7-2-1', text: 'תן דוגמה לשאלת סוף אימון שמקדמת מודעות עצמית ("מה למדת על עצמך היום?").', type: QuestionType.OpenEnded }, { id: '7-2-2', text: 'כיצד אתה משתמש במשחק כדי ללמד על דפוסי תגובה חברתיים?', type: QuestionType.OpenEnded }, { id: '7-2-3', text: 'תאר איך השתמשת בקלפים טיפוליים או בכלי דומה כדי לעורר שיח על רגשות וערכים.', type: QuestionType.OpenEnded }] },
        { title: 'רפלקציה אישית', questions: [{ id: '7-3-1', text: 'שתף ברגע של הארה אישית שהייתה לך בעקבות אינטראקציה עם חניך, אשר לימדה אותך משהו חדש על עצמך.', type: QuestionType.Reflection }] }
    ]
  },
  {
    id: 8,
    title: 'פרק 8: התמודדות עם קונפליקטים בקבוצה',
    sections: [
        { title: 'בדיקת הבנה', questions: [{ id: '8-1-1', text: 'מדוע קונפליקט הוא חלק חיוני מהתפתחות קבוצה בריאה?', type: QuestionType.OpenEnded }, { id: '8-1-2', text: 'מהם עקרונות הגישור בגובה העיניים עם ילדים?', type: QuestionType.OpenEnded }, { id: '8-1-3', text: 'מהו תפקידו של "המתבונן השלישי" וכיצד הוא מסייע בפתרון קונפליקט?', type: QuestionType.OpenEnded }] },
        { title: 'יישום עצמי', questions: [{ id: '8-2-1', text: 'תאר מקרה בו ניהלת קונפליקט קבוצתי והפכת אותו להזדמנות למידה חברתית.', type: QuestionType.OpenEnded }, { id: '8-2-2', text: 'באילו משחקי משא ומתן או פתרון בעיות אתה משתמש כדי לתרגל ניהול קונפליקטים?', type: QuestionType.OpenEnded }, { id: '8-2-3', text: 'כיצד אתה מתערב כדי למנוע הפיכת דינמיקה שלילית ל"שעיר לעזאזל"?', type: QuestionType.OpenEnded }] },
        { title: 'רפלקציה אישית', questions: [{ id: '8-3-1', text: 'היזכר בקונפליקט שהרגשת שהיה קשה לך לנהל כמדריך. מה היו הקשיים שלך, וכיצד היית פועל היום?', type: QuestionType.Reflection }] }
    ]
  },
  {
    id: 9,
    title: 'פרק 9: שיתוף פעולה עם ההורים והמטפלת הרגשית',
    sections: [
        { title: 'בדיקת הבנה', questions: [{ id: '9-1-1', text: 'מדוע ההורים הם "שותפים" להצלחת הילד ולא רק "משלמים"?', type: QuestionType.OpenEnded }, { id: '9-1-2', text: 'מהי "שפת עבודה אחידה" בין המדריך, ההורים והמטפלת?', type: QuestionType.OpenEnded }, { id: '9-1-3', text: 'מהו עקרון "העברת הדגל" ומתי נכון להשתמש בו?', type: QuestionType.OpenEnded }] },
        { title: 'יישום עצמי', questions: [{ id: '9-2-1', text: 'כיצד אתה יוצר תיאום ציפיות יעיל עם הורים בתחילת התהליך?', type: QuestionType.OpenEnded }, { id: '9-2-2', text: 'תן דוגמה למסר שהעברת להורה (בכתב או בע"פ) שחיזק את התהליך של הילד.', type: QuestionType.OpenEnded }, { id: '9-2-3', text: 'תאר מקרה בו התייעצת עם גורם טיפולי חיצוני וכיצד זה סייע לך ולילד.', type: QuestionType.OpenEnded }] },
        { title: 'רפלקציה אישית', questions: [{ id: '9-3-1', text: 'חשוב על מקרה בו התקשורת עם הורים הייתה מאתגרת. מה היו הקשיים וכיצד ניתן היה לשפר את שיתוף הפעולה?', type: QuestionType.Reflection }] }
    ]
  },
  {
    id: 10,
    title: 'פרק 10: החזקה רגשית של הקבוצה כמדריך',
    sections: [
        { title: 'בדיקת הבנה', questions: [{ id: '10-1-1', text: 'מהי המשמעות של "להחזיק קבוצה" ומה ההבדל בין זה ללהיות "חבר" של הילדים?', type: QuestionType.OpenEnded }, { id: '10-1-2', text: 'מהו "ויסות עצמי" של המדריך ומדוע הוא קריטי ביכולת להחזיק קבוצה?', type: QuestionType.OpenEnded }, { id: '10-1-3', text: 'כיצד שימוש בשפה בטוחה ("אני רואה שקשה לך") משפיע על האווירה בקבוצה?', type: QuestionType.OpenEnded }] },
        { title: 'יישום עצמי', questions: [{ id: '10-2-1', text: 'תאר מקרה בו הרגשת מוצף רגשית באימון. כיצד זיהית זאת ומה עשית כדי לווסת את עצמך?', type: QuestionType.OpenEnded }, { id: '10-2-2', text: 'כיצד אתה מציב גבולות בריאים מול חניכים שמחפשים קרבה לא מותאמת?', type: QuestionType.OpenEnded }, { id: '10-2-3', text: 'אילו "טקסי תחזוקה" רגשיים (שיחות צוות, הדרכות) יש לך כדי לא להישחק?', type: QuestionType.OpenEnded }] },
        { title: 'רפלקציה אישית', questions: [{ id: '10-3-1', text: 'חשוב על רגע בו הרגשת שהיית ה"עוגן" הרגשי של הקבוצה. מה אפשר לך להיות שם עבורם, ומה זה דרש ממך?', type: QuestionType.Reflection }] }
    ]
  }
];
