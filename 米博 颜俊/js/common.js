/**
 * 兼容写法获取元素最终的样式
 * @param {要获取哪个元素的样式} obj 
 * @param {要获取什么样式属性} attr 
 */
function getStyle(obj, attr) {

    if (window.getComputedStyle) {

        // 这相当于就是在判断浏览器是否支持这个方法
        // console.log(window.getComputedStyle(obj)[attr]);
        return window.getComputedStyle(obj)[attr];

    } else {

        // console.log(obj.currentStyle[attr]);
        return obj.currentStyle[attr];

    }
}



/**
 * 获取下一个兄弟元素
 * @param {要找哪一个元素的下一个元素} ele 
 */
function getNextElement(ele) {

    var node = ele.nextSibling;

    // 节点不为null，并且节点不为1，都要继续找下一个
    while (node != null && node.nodeType != 1) {

        node = node.nextSibling;
    }

    // 要么找到null，要么找到标签
    // console.log(node);
    return node;
}


/**
 * 获取上一个兄弟元素
 * @param {要找哪一个元素的上一个元素} ele 
 */
function getPrevElement(ele) {

    var node = ele.previousSibling;

    while (node != null && node.nodeType != 1) {

        node = node.previousSibling;
    }

    return node;
}


/**
 * 移动动画的函数
 * @param {要移动谁} obj 
 * @param {目标} target 
 */
function animate(obj,target) {

    // 我们确实也需要停止计时器
    // 但是我们又不希望一个元素能够停止另外一个元素的计时器
    // 简单来说，我们各停各的，就是自己的计时器只能停自己的
    clearInterval(obj.timerID);

    // 每次开启新的计时器之前，先把上一次计时器关掉
    // 给谁移动的计时器id，就存在谁身上了
    obj.timerID = setInterval(function () {

        //每次都要在当前位置上加一步，所以首先要获取当前位置
        var current = obj.offsetLeft;

        // 判断目的地和当前位置之间的距离，是否大于10，大于10代表够走
        // 够走这一步就走，不够走就直接到400
        if (Math.abs(target - current) > 10) {

            // 如果目标大于当前距离代表往右走，那么就是正10
            // 如果目标小于当前距离代表往左走，那么就是负10
            current += target > current ? 10 : -10;

            obj.style.left = current + "px";

        } else {

            obj.style.left = target + "px";
        }

        if (current == target) {

            //停止计时器
            clearInterval(obj.timerID);
        }

    }, 10);
}

/**
 * 
 * @param {要修改的元素} obj 
 * @param {它要修改到的方向和目标} attrs 
 * @param {动画完成后的回调函数} callback 
 */

function animateSlow(obj, attrs, callback) {

    // 开启新的计时器之前先清空上一次的计时器
    clearInterval(obj.timerID);

    obj.timerID = setInterval(function () {

        // 我现在立个flag，我认为大家都到了，跪求打脸
        var flag = true;

        // key就是要修改的属性 attrs[key]就是要到达的目标
        for (var key in attrs) {

            if (key == 'opacity') {

                var baseNum = 100;

                // 要先放到100倍
                var current = parseFloat(getStyle(obj, key)) * baseNum;

                // 取出属性值，也就是要到的目标值
                var target = attrs[key] * baseNum;

                // 要计算出每一步走多少
                var res = (target - current) / 10;
                // 计算出步长，只能得到-1或者1
                var step = res > 0 ? Math.ceil(res) : Math.floor(res);


                // 直接走这一步
                current += step;

                // 最终计算的结果除以100
                obj.style[key] = current / baseNum;

                // 如果当前位置不等于目标
                if (current != target) {

                    //代表没到，不停计时器
                    // 只要有一个没到就要打脸
                    flag = false;
                }

            } else {
                var current = parseInt(getStyle(obj, key));//8px变成8 获取带单位的字符串

                // 取出属性值，也就是要到的目标值
                var target = attrs[key];

                // 要计算出每一步走多少
                var res = (target - current) / 10;
                // 计算出步长，只能得到-1或者1
                var step = res > 0 ? Math.ceil(res) : Math.floor(res);


                // 直接走这一步
                current += step;
                obj.style[key] = current + "px";

                // 如果当前位置不等于目标
                if (current != target) {

                    //代表没到，不停计时器
                    // 只要有一个没到就要打脸
                    flag = false;
                }
            }
        }

        // 要大家都到了，才停止计时器
        // 如果flag还为true代表一次没打过脸，就代表大家都到了，大家都到了就停止计时器
        if (flag == true) {
            // 停止计时器的时候代表都到目的地了
            clearInterval(obj.timerID);

            // 如果我们希望到了后做一些事，就把那些事写到这个地方
            // 但是我们那些代码不能写死，应该让别人传过来
            // 把代码打包到函数里，你只要传入函数，相当于就是把代码传过来了
            // 然后在这里调用就行了
            if(callback instanceof Function){
                callback();
            }
        }

    }, 10);
}