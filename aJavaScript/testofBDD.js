//实现功能： 计算X的N次方
// document.write("<script language=javascript src='https://unpkg.com/mocha/mocha.js'></script>");
// document.write("<script language=javascript src='https://unpkg.com/chai/chai.js'></script>");
//在创建函数pow之前，先想象函数应该做什么并且描述出来

/**
 * it('use case description', fn)
 * assert.equal(value1, value2)
 * assert.* 用于检查函数是否按照预期工作。
 *
 * */

//mocha在浏览器里，运行需要mocha.js 和 mocha.css
//在加载完响应的js后，用mocha.setup('bdd')使用BDD模式，用mocha.run()命令运行mocha

/**
 * 开发流程
 * 1.编写初始规范。测试嘴贱本的功能
 * 2. 创建一个最初的实现。
 * 3. 检查它是否工作，我们运行测试框架来运行测试。当功能未完成时，将显示错误。我们持续修正直到一切都能工作。
 * 4. 我们现在有一个带有测试的能工作的初步实现
 * 5. 我们增加更多的用例到规范中。货续目前的程序还不支持。无法通过测试
 * 6. 回到第3步骤，更新程序知道测试不会抛出错误
 * 7. 重复第3步到第6步，知道功能完善
 *
 * 以上可以看出，开发就是不断的迭代。
 * 写规范，实现它，确保测试通过，然后写更多的测试，确保它们工作等。最后我们有了一个能工作的实现和针对它的测试。
 *
 * 1.可以在用一个it中。添加多个assert,
 * 2.写多个it测试
 * : 保持测试之间独立，有助于我们获知代码中正在发生什么，因此第二种方式更好一点。
 * 还有一个规范值得遵循，一个测试检测一个东西。
 * **/


// the step 1
//describe 描述 : 称为规范，包含用例的描述以及针对他们的测试
// describe('title', function(){...})
//1. 可以在用一个it中。添加多个assert
describe("pow", function () {
    it('2 raise to power 3  is 8', function () {
        assert.equal(pow(2,3), 8);
    });
    it('3 raise to power 1  is 3', function () {
        assert.equal(pow(3,1), 3);
    });
    it('2 raise to power -1  is false', function () {
        assert.equal(pow(2,-1), false);
    });


    //我们可以设置 before/after 函数来在运行测试之前/之后执行
    // before(()=>alert("Test started - before all tests"))
    // after(()=>alert("Test started - before all tests"))

    describe('raises x to the power n ', function () {
        it('raises x to the power n', function(){
            let x = 5
            let result = x;
            assert.equal(pow(x,1), result)
            result *= x
            assert.equal(pow(x,2), result)
            result *= x
            assert.equal(pow(x,3), result)
        //   以上测试代码有什么错误？
            // 一个测试检测一个东西， 可读性没有
        })

        let x = 5
        let result = x;
        it('raise 5 to power 1 is 5',function () {
            console.log( '1' +result)
            assert.equal(pow(x,1), result)
        })
        console.log( '2 ,' +result)
        result *= x;
        it('raise 5 to power 2 is 25',function () {
            console.log( '2' +result)
            assert.equal(pow(x,2), result)
        })
        console.log( '3 ,' +result)
         result *= x;
        it('raise 5 to power 3 is 125',function () {
            console.log( '3' +result)
            assert.equal(pow(x,3), result)
        })
    })



    describe('raises x to power 3', function () {
        function makeTest(x) {
            let excepted = x*x*x;
            it(`${x} in the power 3 is ${excepted}`,function(){
                assert.equal(pow(x,3), excepted)
            })
        }
        for (let i=1; i<6; i++) {
            makeTest(i)
        }
    })
})


// //step 2
// function pow(x,n){
//     if(n==0) return 1
//     return x * pow(x,n-1)
// }

//1. 写多个it中

//保持测试之间独立，有助于我们获知代码中正在发生什么，因此第二种方式更好一点。
