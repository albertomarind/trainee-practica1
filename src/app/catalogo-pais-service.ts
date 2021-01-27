import { CatalogoService } from './catalogo-service';
import { CatalogoPais } from './catalogo-pais';

export interface CatalogoPaisService extends CatalogoService<CatalogoPais> {
    getPaisByName(name: string): CatalogoPais;
}
