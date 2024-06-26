const slider = document.querySelector(".image-comparison .slider");
    const beforeImage = document.querySelector(".image-comparison .before-image");
    const afterLabel = document.querySelector(".image-comparison .label.after");
    const sliderLine = document.querySelector(".image-comparison .slider-line");
    const sliderIcon = document.querySelector(".image-comparison .slider-icon");

    slider.addEventListener("input", (e) => {
        let sliderValue = e.target.value + "%";

        beforeImage.style.width = sliderValue;
        sliderLine.style.left = sliderValue;
        sliderIcon.style.left = sliderValue;
        afterLabel.style.left = sliderValue;
    });

    /* Đẩy ảnh lên */
    function myFunction(smallImg) {
        var fullImg = document.getElementById("imgBox");
        fullImg.src = smallImg.src;
    }

    const replies = [
        "Bạn có thể mô tả rõ hơn về tình trạng tóc của bạn không?",
        "Điều này có thể xuất phát từ nhiều nguyên nhân như thiếu dinh dưỡng, sử dụng nhiệt độ cao khi tạo kiểu, hoặc dùng quá nhiều hóa chất. Bạn có thể chia sẻ thêm về chế độ chăm sóc tóc hàng ngày của bạn không?",
        "Việc sử dụng nhiệt độ cao và hóa chất quá nhiều có thể làm tóc yếu đi. Bạn nên thử giảm tần suất sử dụng các thiết bị nhiệt và hạn chế nhuộm tóc. Bạn có sử dụng bất kỳ sản phẩm dưỡng tóc nào không?",
        "Bên cạnh dầu xả, bạn nên sử dụng thêm dầu dưỡng tóc hoặc các loại mặt nạ dưỡng tóc để cung cấp độ ẩm và dưỡng chất cho tóc. Các sản phẩm chứa keratin, biotin, và các loại dầu tự nhiên như dầu argan hoặc dầu dừa có thể rất hữu ích",
        "Bạn có thể bắt đầu bằng cách đọc kỹ nhãn sản phẩm và tìm kiếm các thành phần như keratin, biotin, vitamin E, và các loại dầu tự nhiên. Nếu có thể, hãy chọn các sản phẩm không chứa sulfates và parabens. Ngoài ra, việc ăn uống đủ dưỡng chất, uống nhiều nước, và tránh căng thẳng cũng rất quan trọng",
        "Nếu bạn cần thêm thông tin hoặc có bất kỳ câu hỏi nào khác, đừng ngần ngại hỏi tôi nhé. Chúc bạn sớm có mái tóc khỏe đẹp!"
    ];
    let replyIndex = 0;
    function toggleChatBox() {
        const chatBox = document.getElementById('chat-box');
        if (chatBox.style.display === "none" || chatBox.style.display === "") {
            chatBox.style.display = "flex";
            toggleOverflow(); // Kiểm tra overflow khi hiển thị box chat
        } else {
            chatBox.style.display = "none";
        }
    }
    function toggleOverflow() {
        const chatMessages = document.getElementById('chat-messages');
        if (chatMessages.scrollHeight > 100) {
            chatMessages.style.overflowY = "scroll";
        } else {
            chatMessages.style.overflowY = "visible";
        }
    }
    function sendMessage() {
        const input = document.getElementById('message-input');
        const message = input.value.trim();
        if (message === "") return;
        // Display the sent message
        displayMessage(message, 'sent');
        // Clear the input field
        input.value = "";
        // Simulate a reply from the chat bot
        setTimeout(() => {
            const reply = getOrderedReply();
            displayMessageWordByWord(reply, 'received');
            toggleOverflow(); 
        }, 1000);
    }
    function displayMessage(message, type) {
        const messageContainer = document.getElementById('chat-messages');
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('message-container', type);
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        if (type === 'received') {
            const logo = document.createElement('img');
            logo.src = 'img/logo2.jpg';
            logo.alt = 'Logo';
            logo.classList.add('logo1');
            messageWrapper.appendChild(logo);
        }
        const textElement = document.createElement('span');
        textElement.innerText = message;
        messageElement.appendChild(textElement);
        messageWrapper.appendChild(messageElement);
        messageContainer.appendChild(messageWrapper);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
    function displayMessageWordByWord(message, type) {
        const messageContainer = document.getElementById('chat-messages');
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('message-container', type);
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        if (type === 'received') {
            const logo = document.createElement('img');
            logo.src = 'img/logo2.jpg';
            logo.alt = 'Logo';
            logo.classList.add('logo1');
            messageWrapper.appendChild(logo);
        }
        const textElement = document.createElement('span');
        messageElement.appendChild(textElement);
        messageWrapper.appendChild(messageElement);
        messageContainer.appendChild(messageWrapper);
        const words = message.split(' ');
        let index = 0;
        const interval = setInterval(() => {
            if (index < words.length) {
                textElement.innerText += (index > 0 ? ' ' : '') + words[index];
                index++;
                messageContainer.scrollTop = messageContainer.scrollHeight;
            } else {
                clearInterval(interval);
            }
        }, 200); // Adjust the interval time to control the speed of word appearance
    }
    function getOrderedReply() {
        const reply = replies[replyIndex];
        replyIndex = (replyIndex + 1) % replies.length;
        return reply;
    }
    
    document.getElementById('message-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
    
    window.addEventListener('resize', toggleOverflow); 
    document.addEventListener('DOMContentLoaded', toggleOverflow); 

