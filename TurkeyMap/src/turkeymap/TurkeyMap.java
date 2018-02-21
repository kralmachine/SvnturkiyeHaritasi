
package turkeymap;

import java.util.Random;
import javafx.application.Application;
import javafx.concurrent.Task;
import javafx.concurrent.Worker;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.ScrollPane;
import javafx.scene.layout.VBox;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import netscape.javascript.JSObject;


public class TurkeyMap extends Application {
    
    Random rnd=new Random();
    int gelenIlID=0;
    String[] iller={"adana","adiyaman","afyonkarahisar","agri","amasya","ankara","antalya","artvin","aydin",
        "balikesir","bilecik","bingol","bitlis","bolu","burdur","bursa","canakkale","cankiri","corum",
        "denizli","diyarbakir","edirne","elazig","erzincan","erzurum","eskisehir","gaziantep","giresun","gümüshane",
        "hakkari","hatay","isparta","mersin","istanbul","izmir","kars","kastamonu","kayseri","kirklareli","kirsehir","kocaeli","konya","kutahya",
        "malatya","manisa","kahramanmaras","mardin","mugla","mus","nevsehir","nigde","ordu","rize","sakarya","samsun",
        "siirt","sinop","sivas","tekirdag","tokat","trabzon","tunceli","sanliurfa","usak","van","yozgat","zonguldak","aksaray","bayburt","karaman",
        "kirikkale","batman","sirnak","bartin","ardahan","igdir","yalova","karabuk","kilis","osmaniye","duzce","kibris"};
    String gelenILAdi="";
    
    @Override
    public void start(Stage primaryStage) {
       
        VBox vBox=new VBox(10);
        vBox.setAlignment(Pos.CENTER);
        
        ScrollPane scrollPane = new ScrollPane();
        WebView view = new WebView();
        WebEngine engine = view.getEngine();
        scrollPane.setContent(view);
        scrollPane.resize(1200, 768);
        scrollPane.setFitToWidth(true);
	scrollPane.setFitToHeight(true);
        
       
        vBox.getChildren().add(view);

        
      
        
        engine.load("file:\\C:\\Users\\aAa\\Desktop\\svg-turkiye-haritasi-master\\svg-turkiye-haritasi-master\\index.html"); 
        
        
         /*engine.getLoadWorker().stateProperty()
                .addListener((obs,oldValue,newValue)->{
                    if(newValue==Worker.State.SUCCEEDED){
                        System.out.println("finished loading");
                        JSObject jSObject=(JSObject)engine.executeScript("window");
                        engine.executeScript( "getILIsmi('"+iller+"');");
                    }
                });*/
        
          
        Task task = new Task<Void>() {
         @Override public Void call() {
           
             
             gelenIlID=rnd.nextInt(82);
             gelenILAdi=iller[gelenIlID];
             System.out.println("İL ID :"+gelenIlID+" İl adi :"+gelenILAdi);
                while(true){
                    
                
                 try {
                     Thread.sleep(1000);
                     gelenIlID=rnd.nextInt(82);
                 } catch (Exception ex) {
                     ex.printStackTrace();
                 }
                   
                 gelenILAdi=iller[gelenIlID];
                 System.out.println("İL ID :"+gelenIlID+" İl adi :"+gelenILAdi); 
                }
             
                
            }
            };
        
        new Thread(task).start();
          
        
        
        
        
        Scene scene = new Scene(vBox);
        primaryStage.setScene(scene);
        primaryStage.setTitle("TÜRKİYE HARİTASI");
        primaryStage.setMaximized(true);
        primaryStage.setResizable(false);
        primaryStage.show();
    }
    
   

    public static void main(String[] args) {
        launch(args);
    }
    
}
