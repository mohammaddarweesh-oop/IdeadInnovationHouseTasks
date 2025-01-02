let names = ["mohammad", "ahmad", "abd allah", "osama"];
let fruits = ["Banana", "Orange", "Apple", "Mango"];

// هذه الميثود تقوم بتحويل المصفوفة الى نص
console.log(names.toString());

// هذه الميثود تقوم بترتيب العناصر تنازليا او تصاعديا
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

//
