# demo-git
Các sử dụng git cơ bản.
============================
### Các thao tác cơ bản với git cơ bản.
- Tạo tài khoản trên github.
- Tạo dự án trên remote.
- Kết nối git local với git remote.
  + Lệnh: **git remote add origin <url>**
- Đồng bộ code từ server về local từ nhánh master.
  + Lệnh: **git pull origin master --allow-unrelated-histories**
- Đẩy codoe từ local lên server:
  + Lệnh: **git push origin master** (đẩy code lên nhánh master).
  
Sự dụng navigation.
============================
> Chú ý:
>  + React Native là thư viện có nhiệm vụ xây dựng giao diện của mobile. Vậy nên React Native không có khả năng chuyển giữa các màn hình trong ứng dụng. 
>  + Để giải quyết vấn đề này, ta phải sử dụng thêm thư viện **[react-navigation](https://reactnavigation.org/docs/getting-started)** phục vụ việc chuyển giữa các màn hình.
> + Các thư viện bên thư ba cài đặt vào dự án React Native được lưu trữ online trên node package manager [NPM](https://www.npmjs.com/). 

### Cài đặt: [hướng dẫn cài đặt thu viện react-navigation cho dự án React Native sử dụng expo](https://reactnavigation.org/docs/getting-started)
- Mở terminal/commanline trong thư mục có chứa dự án.
  + Gõ lệnh: **npm install @react-navigation/native**. 
  + Với lệnh **npm install <tên package>** cài đặt thư viện với tên tương dúng vào dự án và code của thư viện được lưu trữ trong thư mục node_module.
- Cài đặt thư viện giúp tạo ra animation trong việc chuyển màn hình, căn chỉnh layout,...
  + Gõ lệnh: **expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view**
### Sử dụng thư viện react-navigation.
> Chú ý:
>  + Các màn hình trong dự án được tổ chức theo nguyên lý hoạt động của stack LIFO (last in, first out).
>  + Màn hình ở trên đỉnh của stask sẽ được hiển thị trên màn hình của điện thoại.
>  + Muốn chuyển từ màn hình A qua màn hình B, ta chỉ cần đưa màn hình B lên đỉnh stack và đưa màn hình A nằm ở dưới stask màn B.
>  + Muốn từ màn B quay trở lại màn A, ta sẽ phải POP màn hình B ra khỏi đỉnh stask.
- Cài đặt thư viện [@react-navigation/stack](https://reactnavigation.org/docs/hello-react-navigation).
  + Lệnh: npm install @react-navigation/stack
- Code stack:
```
// Tronng file App.js của dự án.

import React from 'react';                                      // import thư viện react giúp việc tạo DOM ảo.
import { View, Text } from 'react-native';                      // import thư viện react-native chức các control của ứng dụng.
import { NavigationContainer } from '@react-navigation/native'; // import thư viện @react-navigation/native tác dụng quản lý dữ liệu,
                                                                // liên kết chuyển trang với môi trường ứng dụng.
import { createStackNavigator } from '@react-navigation/stack'; // import thư viện @react-navigation/stack tạo ra stack quản lý các màn hình

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();  // tạo ra stack

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>     // stack container
        <Stack.Screen name="Home" component={HomeScreen} /> // các màn hình tương ứng từng ngăn xếp trong stack.
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
  + Với **Stack.Screen** chứa hai props đầu vào là:
    * **name**: giống như khoá chính giúp phân biệt các màn hình khác nhau trong stask. Nó phải là duy nhất trong các stask.
    * **component**: màn hình.
  + Khi khởi tạo màn hình nào được code ở đầu tiên sẽ ở vị trí trên đỉnh của stask.
  + để bỏ phần Header trên các màn hình ta có thể tham tham số: **headerShown: false**.
  
  
  
  
  
  

