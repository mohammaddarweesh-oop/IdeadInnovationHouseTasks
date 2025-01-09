let names = ["mohammad", "ahmad", "abd allah", "osama"];
let fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// هذه الميثود تقوم بتحويل المصفوفة الى نص
console.log(names.toString());

// هذه الميثود تقوم بترتيب العناصر في المصفوفة (تدريجيًا من الأصغر إلى الأكبر أو العكس حسب التحديد).
console.log(names.sort());

// هذه الميثود تقوم بعد عناصر المصفوفة وترجع رقم إنتجر
console.log(names.length);

// هذه الميثود تقوم بحذف اول عنصر في المصفوفه
console.log(names.shift());

// هذه الميثود تقوم بإضافة عنصر في بداية المصفوفة
names.unshift("Nasser");
console.log(names);

// هذه الميثود تقوم بإنشاء مصفوفة جديدة تدمج مصفوفتين او اكثر فيها
let namesAndFruits = names.concat(fruits);
console.log(namesAndFruits);

// تقوم بإنشاء مصفوفة جديدة من مصفوفة لها اكثر من بعد وتجعلها في مصفوفة ذات بعد واحد
const newArr = myArr.flat();
console.log(newArr);

// undefined هذه الميثود تقوم بحذف آخر عنصر من المصفوفة وتعيده. إذا كانت المصفوفة فارغة، تعيد
console.log(names.pop());

// هذه الميثود تُستخدم لإضافة أو حذف عناصر من المصفوفة. يتم تحديد البداية وعدد العناصر المطلوب حذفها.
console.log(names.splice(1, 2, "Ayman", "Khaled"));
console.log(names);

//هذه الميثود تقوم بإرجاع جزء من المصفوفة بدءًا من الفهرس المحدد حتى الفهرس الآخر (غير شامل). لا تُعدل المصفوفة الأصلية.
let newNames = names.slice(1, 3);
console.log(newNames);

// هذه الميثود تُستخدم للبحث عن أول فهرس لعنصر معين في المصفوفة. إذا لم يتم العثور عليه، تُرجع -1.
let index = names.indexOf("Ayman");
console.log(index); // 1

//هذه الميثود تُستخدم للتحقق إذا كان العنصر موجودًا في المصفوفة. تُرجع true إذا كان العنصر موجودًا، وfalse إذا لم يكن.
let isFound = names.includes("Khaled");
console.log(isFound); // true

// هذه الميثود تقوم بعكس ترتيب العناصر في المصفوفة.
names.reverse();
console.log(names); // [ 'Khaled', 'Ayman', 'Nasser' ]

// هذه الميثود تقوم بتحويل المصفوفة إلى نص مفصول بعلامة (مثل ,).
let joinedNames = names.join(", ");
console.log(joinedNames); // "Khaled, Ayman, Nasser"

//هذه الميثود تُرجع أول عنصر من المصفوفة يتطابق مع شرط معين يُمرر لها. إذا لم يوجد، تُرجع undefined.
let foundName = names.find((name) => name.startsWith("A"));
console.log(foundName); // "Ayman"

// هذه الميثود تقوم بإنشاء مصفوفة جديدة تحتوي على العناصر التي تطابق شرطًا معينًا.
let longNames = names.filter((name) => name.length > 5);
console.log(longNames); // [ 'Khaled', 'Nasser' ]

//هذه الميثود تُستخدم لإنشاء مصفوفة جديدة تحتوي على نتائج تطبيق دالة على كل عنصر من عناصر المصفوفة الأصلية.
let upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames); // [ 'KHALED', 'AYMAN', 'NASSER' ]

//  هذه الميثود تقوم بتنفيذ دالة على كل عنصر من عناصر المصفوفة دون إنشاء مصفوفة جديدة.
names.forEach((name) => console.log(name));
// Khaled
//  Ayman
// Nasser

// هذه الميثود تُرجع true إذا كان هناك على الأقل عنصر واحد في المصفوفة يتطابق مع شرط معين، وfalse إذا لم يوجد.
let hasLongNames = names.some((name) => name.length > 5);
console.log(hasLongNames); // true

// هذه الميثود تُستخدم لتنفيذ دالة على كل عنصر من المصفوفة للحصول على قيمة واحدة مجمعه.
let totalLength = names.reduce((acc, name) => acc + name.length, 0);
console.log(totalLength); // 17
