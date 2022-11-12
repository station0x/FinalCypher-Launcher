#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use tauri::Manager;
use tauri::SystemTray;
use tauri::{CustomMenuItem, SystemTrayMenu, SystemTrayMenuItem, SystemTrayEvent};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!!!!", name)
}
#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
    let splashscreen_window = window.get_window("splashscreen").unwrap();
    let main_window = window.get_window("main").unwrap();
    tauri::async_runtime::spawn(async move {
        std::thread::sleep(std::time::Duration::from_secs(3));
        splashscreen_window.close().unwrap();
        main_window.show().unwrap();
    });
}

fn main() {
    // here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.
    let quit = CustomMenuItem::new("exit".to_string(), "Exit");
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let restart = CustomMenuItem::new("restart".to_string(), "Restart Launcher");
    let tray_menu = SystemTrayMenu::new()
    .add_item(restart)
    .add_item(hide)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(quit);
    let system_tray = SystemTray::new().with_menu(tray_menu);
    tauri::Builder::default()
        .system_tray(system_tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick {
              position: _,
              size: _,
              ..
            } => {
                let window = app.get_window("main").unwrap();
                window.show().unwrap();
                println!("system tray received a left click");
            }
            SystemTrayEvent::RightClick {
              position: _,
              size: _,
              ..
            } => {
                let window = app.get_window("main").unwrap();
                window.show().unwrap();
                println!("system tray received a right click");
            }
            SystemTrayEvent::DoubleClick {
              position: _,
              size: _,
              ..
            } => {
                let window = app.get_window("main").unwrap();
                window.show().unwrap();
                println!("system tray received a double click");
            }
            SystemTrayEvent::MenuItemClick { id, .. } => {
              match id.as_str() {
                "quit" => {
                  std::process::exit(0);
                }
                "hide" => {
                  let window = app.get_window("main").unwrap();
                  window.hide().unwrap();
                }
                _ => {}
              }
            }
            _ => {}
          })
        .invoke_handler(tauri::generate_handler![greet, close_splashscreen])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// fn main() {
//     tauri::Builder::default()
//       .setup(|app| {
//         let splashscreen_window = app.get_window("splashscreen").unwrap();
//         let main_window = app.get_window("main").unwrap();
//         // we perform the initialization code on a new task so the app doesn't freeze
//         tauri::async_runtime::spawn(async move {
//           // initialize your app here instead of sleeping :)
//           println!("Initializing...");
//           std::thread::sleep(std::time::Duration::from_secs(3));
//           println!("Done initializing.");
  
//           // After it's done, close the splashscreen and display the main window
//           splashscreen_window.close().unwrap();
//           main_window.show().unwrap();
//         });
//         Ok(())
//       })
//       .run(tauri::generate_context!())
//       .expect("failed to run app");
//   }

