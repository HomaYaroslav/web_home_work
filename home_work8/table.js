let showAgain = true;

        while (showAgain) {
            console.clear();
            console.log("ТАБЛИЦЯ МНОЖЕННЯ 1–10\n");

            for (let i = 1; i <= 10; i++) {
                let row = "";
                for (let j = 1; j <= 10; j++) {
                    row += (i * j) + "\t";
                }
                console.log(row);
            }

            showAgain = confirm("Показати таблицю множення ще раз?");
        }