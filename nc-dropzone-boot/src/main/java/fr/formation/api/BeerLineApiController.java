package fr.formation.api;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonView;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.formation.dao.IBeerLineDaoJpaRepository;
import fr.formation.model.BeerLine;
import fr.formation.model.Parachutiste;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/beer-line")
public class BeerLineApiController {
    @Autowired
    private IBeerLineDaoJpaRepository daoBeerLine;

    @GetMapping
    @JsonView(Views.BeerLine.class)
    public List<BeerLine> findAll(){
        return this.daoBeerLine.findAll();
    }

    @PostMapping
    public boolean ajouter(@RequestBody BeerLine beerLine){
        try {
            this.daoBeerLine.save(beerLine);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable int id){
        try {
            this.daoBeerLine.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @PutMapping("/{id}")
    public boolean edit(@PathVariable int id, @RequestBody BeerLine beerLine){
        try {
            beerLine.setId(id);
            this.daoBeerLine.save(beerLine);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    @GetMapping("/membres-beer-line")
    public List<Parachutiste> affiche(){
        return daoBeerLine.findAllFetchingParachutistes();
    }
}
