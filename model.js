module.exports = {predict: function(d){return 1/(1+Math.exp(-this.boosters.map(function(x){return x.predict(d);}).reduce(function(a, b){return a+b;})))},boosters: [{predict: function(d){return this.n0(d);},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<0.05){return this.n3(d);}else{return this.n4(d);}},n6: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<0.05){return this.n7(d);}else{return this.n8(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<0.05){return this.n5(d);}else{return this.n6(d);}},n8: function(d){return -0;},n1: function(d){return -0.185185;},n3: function(d){return 0;},n5: function(d){return 0;},n7: function(d){return 0;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<0.05){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Width']==null){return this.n1(d);}else if(d['Petal.Width']<0.05){return this.n1(d);}else{return this.n2(d);}},n6: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<0.05){return this.n7(d);}else{return this.n8(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<0.05){return this.n5(d);}else{return this.n6(d);}},n8: function(d){return -0.0591033;},n1: function(d){return 0;},n3: function(d){return 0;},n5: function(d){return 0;},n7: function(d){return 0;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<0.05){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Width']==null){return this.n1(d);}else if(d['Petal.Width']<0.05){return this.n1(d);}else{return this.n2(d);}},n6: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<0.05){return this.n7(d);}else{return this.n8(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<0.05){return this.n5(d);}else{return this.n6(d);}},n8: function(d){return -0.0534929;},n1: function(d){return 0;},n3: function(d){return 0;},n5: function(d){return 0;},n7: function(d){return 0;}},{predict: function(d){return this.n0(d);},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<0.05){return this.n3(d);}else{return this.n4(d);}},n6: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<0.05){return this.n7(d);}else{return this.n8(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<0.05){return this.n5(d);}else{return this.n6(d);}},n8: function(d){return 0.0108481;},n1: function(d){return -0.161073;},n3: function(d){return 0;},n5: function(d){return 0;},n7: function(d){return 0;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<0.05){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Width']==null){return this.n1(d);}else if(d['Petal.Width']<0.05){return this.n1(d);}else{return this.n2(d);}},n6: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<0.05){return this.n7(d);}else{return this.n8(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<0.05){return this.n5(d);}else{return this.n6(d);}},n8: function(d){return -0.0445012;},n1: function(d){return 0;},n3: function(d){return 0;},n5: function(d){return 0;},n7: function(d){return 0;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<0.05){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Width']==null){return this.n1(d);}else if(d['Petal.Width']<0.05){return this.n1(d);}else{return this.n2(d);}},n6: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<0.05){return this.n7(d);}else{return this.n8(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<0.05){return this.n5(d);}else{return this.n6(d);}},n8: function(d){return -0.0403855;},n1: function(d){return 0;},n3: function(d){return 0;},n5: function(d){return 0;},n7: function(d){return 0;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<0.05){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Width']==null){return this.n1(d);}else if(d['Petal.Width']<0.05){return this.n1(d);}else{return this.n2(d);}},n6: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<0.05){return this.n7(d);}else{return this.n8(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<0.05){return this.n5(d);}else{return this.n6(d);}},n8: function(d){return -0.0366639;},n1: function(d){return 0;},n3: function(d){return 0;},n5: function(d){return 0;},n7: function(d){return 0;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<0.05){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Width']==null){return this.n1(d);}else if(d['Petal.Width']<0.05){return this.n1(d);}else{return this.n2(d);}},n6: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<0.05){return this.n7(d);}else{return this.n8(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<0.05){return this.n5(d);}else{return this.n6(d);}},n8: function(d){return -0.0332913;},n1: function(d){return 0;},n3: function(d){return 0;},n5: function(d){return 0;},n7: function(d){return 0;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<0.05){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Width']==null){return this.n1(d);}else if(d['Petal.Width']<0.05){return this.n1(d);}else{return this.n2(d);}},n6: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<0.05){return this.n7(d);}else{return this.n8(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<0.05){return this.n5(d);}else{return this.n6(d);}},n8: function(d){return -0.0302303;},n1: function(d){return 0;},n3: function(d){return 0;},n5: function(d){return 0;},n7: function(d){return 0;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<0.05){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Width']==null){return this.n1(d);}else if(d['Petal.Width']<0.05){return this.n1(d);}else{return this.n2(d);}},n6: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<0.05){return this.n7(d);}else{return this.n8(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<0.05){return this.n5(d);}else{return this.n6(d);}},n8: function(d){return -0.0274491;},n1: function(d){return 0;},n3: function(d){return 0;},n5: function(d){return 0;},n7: function(d){return 0;}}]};
