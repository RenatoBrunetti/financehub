import { app, server } from './app';
import { environment } from './config';

app.listen(environment.port, () => {
  console.log('=====================================================');
  console.log(
    `📔 Subscriptions ready at ws://localhost:${environment.port}${server.subscriptionsPath}`,
  );
  console.log(`🚀 Server ready at http://localhost:${environment.port}`);
  console.log('=====================================================');
  console.log('💰 [ FinanceHub ]');
});
