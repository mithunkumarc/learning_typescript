

          function counter_function() {
            // closure
            // outside world cannot manipulate counter
            let counter = 0;
            return () => counter++;
          }

          let c = counter_function();
          c(); // 1
          c(); // 2
          console.log(c()); // 2
