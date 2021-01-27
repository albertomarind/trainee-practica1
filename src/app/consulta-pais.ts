import { CatalogoPais } from "./catalogo-pais";
import { CatalogoPaisService } from "./catalogo-pais-service";

export class ConsultaPais implements CatalogoPaisService {

    getPaisByName(name: string): CatalogoPais {
        if (name === 'eeuu') {
            return {
                id: 1,
                name: 'EEUU',
                language: 'English',
                description: 'United States'
            } as CatalogoPais
        }
        return null;
    }
    findById(id: number): CatalogoPais {
        throw new Error("Method not implemented.");
    }
    save(): CatalogoPais {
        throw new Error("Method not implemented.");
    }
    findAll(): CatalogoPais[] {
        throw new Error("Method not implemented.");
    }

}
